import { Bars2Icon } from '@heroicons/react/20/solid';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Navbar from '../../components/Navbar/Navbar';
import PreviewLink from '../../components/PreviewLink/PreviewLink';
import { platforms } from '../../lib/constants';
import './Dashboard.css';

function useLogin() {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        return navigate('/login');
      }
    });
  }, []);
}

function App() {
  const [dirty, setDirty] = useState(false);
  const [activeTab, setTab] = useState('link');
  const [data, setData] = useState([]);

  useLogin();
  const addLink = () => {
    const clone = [...data];
    clone.push({
      id: clone.length,
      platform: platforms[0],
      link: '',
    });
    setData(clone);
  };

  const removeLink = id => {
    const clone = [...data];
    clone.splice(id, 1);

    setData(
      clone.map((link, index) => ({
        ...link,
        id: index,
      }))
    );
  };
  return (
    <>
      <Navbar activeTab={activeTab} setTab={setTab} />
      <main className="px-6 py-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="hidden md:block">
          <div className="mx-auto max-w-3xl h-full p-6 bg-white shadow flex justify-center items-center hehe relative">
            <div className="absolute phone__link">
              <ul className="space-y-5">
                <PreviewLink type="GitHub">
                  <span>김민정</span>
                </PreviewLink>
                <PreviewLink type="Twitter">
                  <span>강혜원</span>
                </PreviewLink>
                <PreviewLink type="Facebook">
                  <span>강예서</span>
                </PreviewLink>
              </ul>
            </div>
          </div>
        </div>
        <form onSubmit={() => console.log(data)} id="links">
          <div className="max-w-3xl min-h-[80vh] leading-7 p-6 bg-white shadow flex flex-col gap-y-2">
            <div className="min-h-48">
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
                Customize your links
              </h1>
              <p className="mt-2 text-base leading-8 main__gray-text">
                Add/edit/remove links below and share all your profiles with the world
              </p>

              <button
                type="button"
                className="mt-4 w-full border py-2 px-2 rounded-lg main__button-outline font-bold"
                onClick={addLink}
              >
                + Add new link
              </button>
            </div>

            <div className="space-y-6 flex-1">
              {/* Card Link */}
              {data.map(link => (
                <div className="rounded-lg main__card shadow mt-4" key={link.id}>
                  <div className="grid grid-cols-3 px-4 py-2">
                    <h2 className="font-bold col-span-2 text-base">
                      <Bars2Icon className="h-5 w-5 text-gray-400 inline mr-3 mb-1 cursor-pointer" />
                      Link #{link.id}
                    </h2>
                    <button
                      className="col-start-3 text-right"
                      type="button"
                      onClick={() => {
                        removeLink(link.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 px-4">
                    <Dropdown
                      selected={link.platform}
                      setSelected={value => {
                        setDirty(true);
                        const dataClone = [...data];
                        dataClone[link.id] = { ...link, platform: value };
                        setData(dataClone);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-2 px-4 py-4">
                    <label
                      htmlFor="link"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Link
                    </label>
                    <div>
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                        <input
                          id="link"
                          name="link"
                          type="text"
                          value={link.link}
                          onChange={e => {
                            setDirty(true);
                            const dataClone = [...data];
                            dataClone[link.id] = { ...link, link: e.target.value };
                            setData(dataClone);
                          }}
                          className="block flex-1 border-0 bg-transparent text-gray-900 py-1.5 px-2 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-1 p-6 bg-white shadow flex justify-end col-span-2">
            <button
              type="submit"
              className="block w-full md:w-20 py-2 rounded-lg main__button-primary font-bold"
              disabled={!dirty}
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
