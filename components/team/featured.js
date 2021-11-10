function Featured({name, jobTitle, description, image}) {

    return (
        <div className="mt-12 text-center px-4 lg:flex lg:justify-center">
        {/* Image */}
        <div className="lg:mr-6 lg:mt-12">
          {person.image == "" ? (
            <Image
              src={`/img/team/members/no_image.png`}
              width="200"
              height="200"
              className="rounded-full"
            />
          ) : (
            <Image
              src={`/img/team/members/${image}`}
              width="200"
              height="200"
              className="rounded-full"
            />
          )}
        </div>

        {/* Content */}
        <div className="mt-4 md:max-w-xl md:m-auto md:mt-4 lg:m-0 lg:mt-4 lg:max-w-2xl">
          <h1 className="text-4xl">{name}</h1>
          <p className="italic text-2xl mt-2">{jobTitle}</p>
          <p className="text-lg mt-2">{description}</p>
        </div>
      </div>
    );
  }
  
  export default Featured;
  