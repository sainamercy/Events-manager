function EventDetails(){
    return (
        <div className="">
            {/* heading */}
            <div>
                <div className="bg-gray-700">
                    <h1 className="uppercase py-8 text-rose-100 text-4xl font-semibold text-center">Women in Tech Event</h1>
                    <p className="text-white text-center pb-5 italic font-thin">17th June, 2023, Nairobi, Kenya.</p>
                </div>
            </div>
            {/* body */}
            <div className="mt-8 w-3/4 flex flex-col m-auto">
                {/* image */}
                <div>
                    <img src="https://wallpapercave.com/wp/wp2349410.jpg" alt="eventDetails" className="h-96 w-1/2 m-auto"/>
                </div>
                {/* about */}
                <div>
                <div className="flex gap-2 text-3xl items-center py-5"><div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center"><i className="fa-solid fa-star"></i></div><h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">About the event</h3>
          </div>
                    <p>Lorem ipsum dolor sit amet, vel ei probo inimicus instructior, his porro ubique definitionem in. Sed dicat ornatus recusabo an. Pro eu malorum ornatus evertitur, ad mea populo tamquam suscipit. Nec no aeque inimicus constituto. Has mundi utamur eu, id omnis mandamus est, eos quaestio explicari eu.</p>
                </div>
                {/* speakers */}
                <div>
                <div className="flex gap-2 text-3xl items-center py-5"><div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center"><i className="fa-solid fa-users"></i></div><h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">speakers</h3>   
          </div>
          <div className="flex justify-evenly items-center">
                    <div className="flex flex-col gap-2">
                    <img src="https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.jpg?b=1&s=170667a&w=0&k=20&c=JosednIBilI8XY47p_R75vNPRPVNm7ky4JB1DhJCoS4=" alt="speakers" className="w-44 h-44 rounded-full border-4 border-gray-300"/>
                        <h3 className="text-2xl font-bold text-gray-700">John Doe</h3>
                        <h4 className="text-rose-600 font-semibold text-xl">Software Developer</h4>
                        <p>Lorem ipsum dolor sit amet, vel ei probo inimicus instructior, his porro ubique definitionem in. </p>
                    </div>
                    <div className="flex flex-col gap-2">
                    <img src="https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.jpg?b=1&s=170667a&w=0&k=20&c=JosednIBilI8XY47p_R75vNPRPVNm7ky4JB1DhJCoS4=" alt="speakers" className="w-44 h-44 rounded-full border-4 border-gray-300"/>
                        <h3 className="text-2xl font-bold text-gray-700">John Doe</h3>
                        <h4 className="text-rose-600 font-semibold text-xl">Software Developer</h4>
                        <p>Lorem ipsum dolor sit amet, vel ei probo inimicus instructior, his porro ubique definitionem in. </p>
                    </div>
                    <div className="flex flex-col gap-2">
                    <img src="https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.jpg?b=1&s=170667a&w=0&k=20&c=JosednIBilI8XY47p_R75vNPRPVNm7ky4JB1DhJCoS4=" alt="speakers" className="w-44 h-44 rounded-full border-4 border-gray-300"/>
                        <h3 className="text-2xl font-bold text-gray-700">John Doe</h3>
                        <h4 className="text-rose-600 font-semibold text-xl">Software Developer</h4>
                        <p>Lorem ipsum dolor sit amet, vel ei probo inimicus instructior, his porro ubique definitionem in. </p>
                    </div>
                </div>
            </div>
            </div>
            {/* aside */}
        </div>
    )   
}

export default EventDetails