import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { AnimatePresence, Button, Square, Stack, TamaguiProvider, Text, Theme } from 'tamagui'
import config from './tamagui.config'
import { useState } from 'react'

// copied from docs
const MyComponent = ({ isVisible }: { isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <Square
        key="my-square"
        animation="bouncy"
        backgroundColor="green"
        size={50}
        exitStyle={{
          size: 100,
        }}
      />
    )}
  </AnimatePresence>
)

function TestAnimatedComponent() {
  const [open, setOpen] = useState(true)
  return <Stack space="$4">
    <Button onPress={() => setOpen(o => !o)} pressStyle={{ bg: '$gray11' }}>
      {open ? 'opened' : 'closed'}
    </Button>
    <MyComponent isVisible={open} />
  </Stack>
}



export default function App() {

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <Stack space="$4" px="$5" pt="$12" backgroundColor={'$backgroundSoft'}>
          <Text>@tamagui/animations-reanimated</Text>
          <TestAnimatedComponent />
        </Stack>
      </Theme>
    </TamaguiProvider>
  )

}
