import { ChangeEvent, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../services/users";

export const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    createUser(user.name, user.email, user.password);
    setUser({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <span className="text-center text-2xl text-rose-500 font-black">Register</span>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
          Cadastrar uma conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                id="name"
                name="name"
                value={user.name}
                type="text"
                autoComplete="nome"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                id="email"
                name="email"
                value={user.email}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={handleInputChange}
                id="password"
                name="password"
                value={user.password}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
            >
              Cadastrar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Já possui uma conta?{' '}
          <Link to="/" className="font-semibold leading-6 text-rose-500 hover:text-rose-500">
            Faça login aqui
          </Link>
        </p>
      </div>
    </div>
  );
};
