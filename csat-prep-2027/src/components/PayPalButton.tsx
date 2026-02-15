import React, { useEffect } from 'react';

declare global {
    interface Window {
        paypal?: any;
    }
}

interface PayPalButtonProps {
    amount: string;
    onSuccess?: (details: any) => void;
    onError?: (err: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess, onError }) => {
    useEffect(() => {
        const renderButtons = () => {
            if (window.paypal) {
                const container = document.getElementById('paypal-button-container');
                if (container) {
                    container.innerHTML = ''; // 중복 방지
                    window.paypal.Buttons({
                        createOrder: (_data: any, actions: any) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: amount
                                    }
                                }]
                            });
                        },
                        onApprove: async (_data: any, actions: any) => {
                            const details = await actions.order.capture();
                            if (onSuccess) onSuccess(details);
                        },
                        onError: (err: any) => {
                            console.error('PayPal Checkout Error:', err);
                            if (onError) onError(err);
                        }
                    }).render('#paypal-button-container');
                }
            }
        };

        if (window.paypal) {
            renderButtons();
            return;
        }

        const script = document.createElement('script');
        // Vite uses import.meta.env and VITE_ prefix
        const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test';
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
        script.async = true;
        script.onload = renderButtons;
        document.body.appendChild(script);

        return () => {
            // cleanup if necessary
        };
    }, [amount, onSuccess, onError]);

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Premium 결제</h3>
            <div id="paypal-button-container" className="w-full min-w-[300px]"></div>
        </div>
    );
};

export default PayPalButton;
