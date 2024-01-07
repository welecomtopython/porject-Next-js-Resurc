import Image from 'next/image'
import { Theme } from '@radix-ui/themes';
export default function Home() {
  return (
    <Theme
  accentColor="Tomato"
  grayColor="Tomato"
  panelBackground="solid"
  scaling="100%"
  radius="full"
>
 <h1>Home</h1>
</Theme>
  )
}
