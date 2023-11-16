import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"
import { FormEventHandler, useRef } from "react"

export const Profile = () => {
  // const [currentUser, setCurrentUser] = useState<IEditUserProps>({
  //   photo: '',
  //   name: '',
  //   email: '',
  //   password: ''
  // })

  // const { user } = useContext(AuthContext)

  const inputNameRef = useRef()
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()
  const inputFileRef = useRef()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
  };

  const handleEditUser = () => {
    console.log('Habilitando a edição')
  }

  const handleSaveUser = () => {
    console.log('Salvando usuário')
  }


  return (
    <>
      <Navigation />
      <div className="w-11/12 h-screen mx-auto flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full sm:w-80">
          <div className="flex gap-x-5 items-center mb-5">
            <span className="font-bold text-gray-600 text-md">Baralhos criados: 0</span>
            <span className="font-bold text-gray-600 text-md">Cartões criados: 0</span>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-2 mb-5">
            <div className="w-20 h-20 shadow-md rounded-full border bg-profile-example bg-cover bg-center bg-no-repeat"></div>
            <input ref={inputNameRef} className="border p-2 rounded-md shadow-md placeholder:text-gray-800" type="text" name="name" placeholder="Insira seu nome" minLength={1} maxLength={50} disabled />
          </div>
          <div className="flex items-center justify-center flex-col w-full gap-y-5">
            <input ref={inputFileRef} className="border w-full p-2 rounded-md shadow-md" type="file" name="photo" />
            <input ref={inputEmailRef} className="border w-full p-2 rounded-md shadow-md placeholder:text-gray-800" type="email" name="email" placeholder="Insira seu email" minLength={1} maxLength={50} disabled />
            <input ref={inputPasswordRef} className="border w-full p-2 rounded-md shadow-md placeholder:text-gray-800" type="password" name="password" placeholder="Insira sua senha" minLength={1} maxLength={50} disabled />
            <button onClick={handleEditUser} className="bg-white hover:bg-gray-100 transition-all duration-300 text-gray-800 font-bold border p-2 rounded-md shadow-md w-full">Editar</button>
            <button onClick={handleSaveUser} className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 text-gray-100 font-bold border p-2 rounded-md shadow-md w-full">Salvar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
