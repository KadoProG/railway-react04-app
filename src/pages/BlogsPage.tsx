import { Box, Chip, Typography } from '@mui/material'
import { LayoutContainer } from '../components/commons/LayoutContainer'
const URL = process.env.PUBLIC_URL

export const BlogsPage = () => (
  <LayoutContainer>
    <Box maxWidth={800} mx="auto" my={6} p={1}>
      <Typography variant="h4" component="h1" fontWeight="bold" align="center">
        こんにちは今回はタイピング練習をしていこうと思います
      </Typography>
      <Typography variant="body2" align="center">
        2024-01-27
      </Typography>
      <Chip label="最新記事" />
      <Box>
        <Box display="flex" justifyContent="center">
          <img src={`${URL}/images/logo512.png`} width="80%" alt="画像" />
        </Box>
        <Typography>
          こんにちは今回はタイピング練習をしていこうと思いますそれでは本日も行ってみましょう。
        </Typography>
        <Typography>
          しかしながら、本日は寒いですね。寒い中電車を乗り継いで大学に来て朝活をしているのですが、なぜ私は朝活をしているのでしょうか？その答えは、
          <Typography component="span" fontWeight="bold">
            もっと成長したい、という貪欲な姿勢を持っている
          </Typography>
          からです。
        </Typography>
        <Typography variant="h5" component="h2" fontWeight="bold" my={3}>
          貪欲であり続けて成長する
        </Typography>
        <Typography>
          人は成長欲求というものを持っています。理由は様々です。承認欲求を満たしたい、人生の満足度を上げたい、そう人は必ず思っており、私もその一人です。しかし、ずっと頑張っているかと言うとそうではありません。時には休み、自分のやりたいことに浸る時間も必要です。
        </Typography>
        <Box display="flex" justifyContent="center">
          <img
            src={`${URL}/images/PSX_20220620_075347.jpg`}
            width="80%"
            alt="画像"
          />
        </Box>
        <Typography>
          私は2021年4月にガジェット沼にハマってしまい、それからまさかのプログラマーという道に進むきっかけにもなりました。当初はPCを使ってる人すげー、という印象で、いい感じの部屋・場所でいい感じの仕事をしている、「好きなことで生きていく」を貫いているイメージが有りました。
        </Typography>
        <Typography>
          実際そうだと思います。好きでないと延々とPCに触れられないと思うし、自分の好みの場所で仕事をしたいというのは人間の本能的な考えなので、至って普通のことです。
        </Typography>
      </Box>
    </Box>
  </LayoutContainer>
)
