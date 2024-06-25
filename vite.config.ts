import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// element-plus 自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// gzip压缩
import compression from 'vite-plugin-compression'
import devTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      devTools(),
      createHtmlPlugin({
        inject: {
          data: {
            title: `${env.VITE_APP_TITLE}`
          }
        }
      }),
      // element-plus自动按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      compression({
        verbose: true, // 是否在控制台输出压缩结果
        disable: false, // 默认 false, 设置为 true 来禁用压缩
        threshold: 10240, // 只处理大于此大小的资源（单位：字节）。默认值为 0。
        algorithm: 'gzip', // 使用 gzip 压缩
        ext: '.gz', // 输出文件的扩展名
        deleteOriginFile: false
      })
    ]
  }
})
