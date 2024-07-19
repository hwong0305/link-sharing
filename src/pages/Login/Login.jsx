import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo-devlinks-large.svg';
import Alert from '../../components/Alert/Alert';
import auth from '../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (e) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <img alt="Devlinks Logo" src={Logo} className="mx-auto h-10 w-auto mb-12" />
        <div className="bg-white shadow rounded-lg sm:max-w-sm sm:w-full mx-auto py-4 px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {error && (
              <Alert>
                <>Invalid email / password combination</>
              </Alert>
            )}
            <form onSubmit={handleSubmitForm} method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="e.g. alex@email.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don&apos;t have an account{' '}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
