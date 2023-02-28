import Button from '@components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PreviewPicture from '../assets/pics/preview.png';

const Post = () => {
  const nativate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generatingImg, setGeneratingImg] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = () => {
    return 1;
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-200">
        Artwork creator
      </h1>
      <p className="mb-6 ml-2 text-lg font-normal text-gray-500 lg:text-xl">
        Write down your stories, then we will turn it into art.
      </p>
      <form className="flex flex-col gap-4 w-full items-center">
        <div className="relative bg-gray-50 dark:bg-gray-800 border dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-3 h-80 flex justify-center items-center">
          {form.photo ? (
            <img src={form.photo} alt={form.prompt} />
          ) : (
            <img src={PreviewPicture} className="w-6/12 h-6/12 object-contain opacity-40" />
          )}
        </div>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full md:w-2/3"
          placeholder="Leave your thoughts..."
        ></textarea>
        <Button> Generate Artwork</Button>
      </form>
    </div>
  );
};

export default Post;
