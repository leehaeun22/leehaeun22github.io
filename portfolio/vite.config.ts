import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 배포하려는 저장소 이름이 'leehaeun22github.io'이므로 
  // 해당 경로를 base로 설정해야 404 오류가 발생하지 않습니다.
  base: '/leehaeun22github.io/',
})