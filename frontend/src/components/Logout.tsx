import { useAuthStore } from '../store/auth'
import { userStore } from '../store/user'
import BlueModal from './modal/BlueModal'

interface Props {
  logout: boolean
  setLogout: React.Dispatch<React.SetStateAction<boolean>>
}

const Logout = ({ logout, setLogout }: Props) => {
  const handleLogout = useAuthStore((state) => state.setLogout)
  const userLogout = userStore((state) => state.setLogout)

  return (
    <BlueModal isOpen={logout}>
      <p>Are you sure you wanna log out?</p>
      <button
        onClick={() => {
          handleLogout()
          userLogout()
          setLogout(false)
        }}
        className="bg-blue text-white text-lg w-20 rounded-2xl mt-6 mx-4 h-[29px]"
      >
        YES
      </button>
      <button
        onClick={() => {
          setLogout(false)
        }}
        className=" bg-blueDark text-white text-lg w-20 rounded-2xl mt-6 mx-4 border-[1.5px] border-blue h-[29px]"
      >
        NO
      </button>
    </BlueModal>
  )
}

export default Logout
