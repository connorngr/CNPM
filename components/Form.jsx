import Link from "next/link";


const Form = ({type, post, setPost, submit, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} dự án</span>
      </h1>
      <p className="mt-3">
        Hãy để cho dự án của bạn trở thành hiện thực.
      </p>

      <form 
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-bold text-base text-gray-700">
            Tên dự án
          </span>
          <input
          value={post.name}
          onChange={(e) => setPost({
             ...post, name:e.target.value})}
             placeholder="Write your project's name..."
             required
             className="form_input"/>
        </label>
        <label>
          <span className="font-satoshi font-bold text-base text-gray-700">
            Mô tả
          </span>
          <textarea 
          value={post.description}
          onChange={(e) => setPost({
             ...post, description:e.target.value})}
             placeholder="Describe your project"
             required
             className="form_input"/>
        </label>
        <div className="flex-end mx-3 mb-2 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
          type="submit"
          disabled={submit}
          className="px-5 py-1.5 bg-primary-orange text-white rounded-full">
            {submit ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form;
