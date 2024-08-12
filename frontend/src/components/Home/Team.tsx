
const TeamPreview = ()=>{
    return(
        <div className=" flex items-center justify-center m-auto">
            <img src="./assets/images/team.png" alt="team" width={300} height={300}  />
        </div>
    )
}

const DashFeature = ()=>{
    return(
        <div className=" flex items-center justify-center  relative -top-[1rem] ">
            <img src="./assets/images/interface.png" alt="interface" className="pointer-events-none mx-auto h-40 w-full object-cover object-top"/>
        </div>
    )
}
const CustomSupport = ()=>{
    return(
        <div className=" flex items-center justify-center mx-auto ">
            <img src="./assets/images/support.png" alt="Support" className=" rounded-sm pointer-events-none mx-auto h-40 w-full object-cover object-top"/>
        </div>
    )
}

const CMS = ()=>{
    return(
        <div className=" flex items-center justify-center  ">
            <img src="./assets/images/cms.png" alt="Support"  className="pointer-events-none mx-auto h-40 w-full object-cover object-top" />
        </div>
    )
}
//* https://www.dropbox.com/scl/fi/dyklo7j1ph09785p1qs71/email.mp4?rlkey=rolo60qzfccg8k7wvx3mr8hed&st=2uy9asmi&dl=0

const EmailMarket = ()=>{
    return(
        <div className=" flex items-center justify-center  ">
            <video autoPlay
                loop
                muted
                playsInline 
                src="https://www.dropbox.com/scl/fi/dyklo7j1ph09785p1qs71/email.mp4?rlkey=rolo60qzfccg8k7wvx3mr8hed&st=2uy9asmi&raw=1" width={200} height={200} className=" rounded-sm pointer-events-none mx-auto h-40 w-full object-cover object-top" />
        </div>
    )
}

const Team = () => {
  return (
    <div>Team</div>
  )
}

export {Team, TeamPreview, DashFeature, CustomSupport, CMS, EmailMarket}