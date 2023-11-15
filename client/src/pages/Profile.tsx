import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"


export const Profile = () => {
  // const [currentUser, setCurrentUser] = useState<IEditUserProps>({
  //   photo: '',
  //   name: '',
  //   email: '',
  //   password: ''
  // })

  // const { user } = useContext(AuthContext)

  // const handleEditUser = () => {
      
  // }

  return (
    <>
      <Navigation />
      <div className="w-11/12 h-screen mx-auto flex flex-col justify-center items-center">
        <div className="w-20 h-20 rounded-full border"></div>
        <div className="divide-x-2"></div>
      </div>
      <Footer />
    </>
  )
}
