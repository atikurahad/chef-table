const About = () => {
  return (
    <>
      <section className="grid grid-cols-2 justify-items-center">
        <div>
          <img className="h-96 w-full" src="https://i.ibb.co.com/YDJxnQs/image-removebg-preview.png" alt="foods" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-extrabold text-black">
            WE MAKE EVERY <br /> MOMENT SPECIAL
          </h1>
          <p className="text-xl my-6 font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis expedita quidem in quasi consequatur!
          </p>
          <p className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            corporis. Perspiciatis ullam mollitia quas rem beatae officia earum
            quis, illum provident sint qui aperiam quo corrupti, obcaecati
            iusto?
          </p>
          <h1 className="text-xl text-blue-600 font-bold my-2">- KAMRAN UZ ZAMAN</h1>
        </div>
      </section>
    </>
  );
};

export default About;
