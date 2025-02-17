import { useEffect, useRef, useState } from "react";
import { asyncAddThreads } from "../states/threads/action";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

export default function AddPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { threads, error } = useSelector((states) => states.threads);
  const submitButtonClicked = useRef(false);

  const [threadInput, setThreadInput] = useState({
    title: "",
    category: "",
    body: "",
  });

  async function onThreadSubmitHandler(e) {
    e.preventDefault();
    submitButtonClicked.current = true;

    if (!localStorage.accessToken) {
      toast.error("Anda harus login terlebih dahulu!");
      return navigate("/login");
    }

    dispatch(asyncAddThreads(threadInput));
  }

  function onthreadInputChangeHandler(e) {
    const { name, value } = e.target;
    setThreadInput({
      ...threadInput,
      [name]: value,
    });
  }

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      submitButtonClicked.current = false;
    } else {
      console.log(submitButtonClicked.current);
      if (submitButtonClicked.current) {
        navigate("/");
      }
    }
  }, [error, navigate, threads]);

  return (
    <section className="mt-16 bg-gray-800 mx-auto p-6 md:w-4/5 lg:w-3/5 min-h-[92vh] text-white">
      <div>
        <h1 className="mt-3 mb-2 font-bold text-2xl">
          Create a new discussion
        </h1>
      </div>
      <form onSubmit={onThreadSubmitHandler}>
        <div className="mb-2">
          <input
            className="w-full bg-transparent border border-white rounded p-2"
            name="title"
            placeholder="العنوان"
            value={threadInput.title}
            onChange={onthreadInputChangeHandler}
          />
        </div>
        <div className="mb-2">
          <input
            className="w-full bg-transparent border border-white rounded p-2"
            name="category"
            placeholder="category"
            value={threadInput.category}
            onChange={onthreadInputChangeHandler}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="w-full bg-transparent border border-white rounded h-24 p-2"
            name="body"
            placeholder="Content..."
            value={threadInput.body}
            onChange={onthreadInputChangeHandler}
          ></textarea>
        </div>
        <button
          className="w-full bg-gray-600 py-2 hover:bg-gray-700 transition-all rounded"
          type="submit"
        >
          Publish
        </button>
      </form>
    </section>
  );
}
