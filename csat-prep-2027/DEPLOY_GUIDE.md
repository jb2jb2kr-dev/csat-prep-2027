# 배포 가이드: CSAT Prep 2027

## 빌드 명령어

### 로컬 빌드 (타입 체크 포함)
```powershell
npm run build
```
- TypeScript 타입 체크 (`tsc --noEmit`) 후 Vite 빌드
- 에러 발생 시 타입 오류 확인 가능

### Vercel 배포 (자동)
- Git push 시 자동 배포
- `npm run build:vercel` 실행 (Vite 빌드만, 더 빠름)

## 빌드 최적화 (2026-02-08 적용)

| 변경 사항 | 이전 | 현재 |
|-----------|------|------|
| 빌드 스크립트 | `tsc -b && node --max-old-space-size=4096...` | `tsc --noEmit && vite build` |
| Vercel 빌드 | 전체 빌드 | `vite build`만 실행 |
| 청크 분할 | 없음 | vendor/ui/pdf 분리 |
| 소스맵 | 기본값 | 비활성화 |

## 문제 해결

### 빌드 실패 시
1. TypeScript 타입 에러 확인:
   ```powershell
   npx tsc --noEmit
   ```

2. 에러 없는데 빌드 실패 시:
   ```powershell
   npx vite build
   ```

### Vercel 배포 실패 시
1. [Vercel Dashboard](https://vercel.com/dashboard)에서 빌드 로그 확인
2. 캐시 클리어 후 재배포:
   - Settings → General → Clear Cache and Redeploy

## 일일 배포 체크리스트

- [ ] 새 데이터 파일 생성 (ex: `20260210.ts`)
- [ ] `questions.ts`에 import 및 등록
- [ ] 로컬 타입 체크: `npx tsc --noEmit`
- [ ] Git commit & push
- [ ] Vercel 배포 확인 (약 1-2분 소요)
