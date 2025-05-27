import { CurrentUserDebug } from './components/CurrentUser'
import { SignIn } from './components/SignIn'
import { LogoutButton } from './components/SignOut'
import { SignUp } from './components/SignUp'

export default function App() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <CurrentUserDebug />
      <LogoutButton />
    </div>
  )
}
