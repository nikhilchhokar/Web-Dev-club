export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 tracking-wide">Projects</h2>
      
      <div className="p-10 text-center bg-transparent rounded-xl">
        <p className="text-lg text-white-400 max-w-md mx-auto">
          Your projects will get <span className="font-semibold text-blue">showcased here</span>. 
          Share your creativity and contributions with the community!
        </p>
        <div className="mt-6 text-blue-500 font-semibold">
          To start adding your projects,{' '}
          <a href="#joinus" className="underline hover:text-blue-400 cursor-pointer">
            Join Us
          </a>
        </div>
      </div>
    </section>
  );
}
