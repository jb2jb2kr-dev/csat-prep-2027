# 업데이트 배포 가이드 (Vercel)

로컬 환경에서 모든 빌드 테스트(tsc 및 vite build)를 성공적으로 마쳤습니다. 로컬호스트(`http://localhost:5173`)에서는 2월 9일 데이터가 정상적으로 확인되지만, Vercel 사이트 반영이 늦어지는 경우 아래 절차를 따라주세요.

## 해결 방법

1.  **Vercel 수동 배포 재시도**:
    *   Vercel 대시보드([vercel.com](https://vercel.com))에 접속합니다.
    *   해당 프로젝트의 **Deployments** 탭으로 이동합니다.
    *   가장 최근의 배포 항목 옆의 점 세 개(...) 메뉴를 클릭하고 **Redeploy**를 선택합니다.
    *   이때 **"Use existing Build Cache"를 체크 해제**하고 진행하시면 가장 확실합니다.

2.  **브라우저 캐시 초기화**:
    *   Vercel 주소(`https://csat-prep-2027.vercel.app/`)에서 `Ctrl + F5` (강력 새로고침)를 눌러주세요.

## 현재 상태 확인 (로컬)
*   `questions.ts`: 2월 9일 데이터 등록 완료
*   `20260209.ts`: 한국어 번역 및 문제 생성 완료
*   빌드 결과: 성공 (dist 폴더 정상 생성)
