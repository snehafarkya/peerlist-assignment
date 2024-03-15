import Image from "next/image";
import logo from '../../public/images/logo.png'
import circlelogo from '../../public/images/circlelogo.svg'
import arrow from '../../public/images/downarrow.svg'
import akash from '../../public/images/akash.svg'
import scroll from '../../public/images/scroll.svg'
import project from '../../public/images/project.svg'
import inbox from '../../public/images/inbox.svg'
import job from '../../public/images/job.svg'
import search from '../../public/images/search.svg'
import network from '../../public/images/network.svg'
import user from '../../public/images/user.svg'
import loom from '../../public/images/Loom - jpeg 0.svg'
import share from '../../public/images/share.svg'
import sharee from '../../public/images/sharee.svg'
import threedot from '../../public/images/threedots.svg'
import edit from '../../public/images/edit.svg'
import Card from "./components/card";
import CardContainer from './components/cardContainer';
export default function Home() {
  const asideMenu = [
    {
      icon: scroll,
      label:'Scroll',
      social:edit,
      stat:'78',
      value:'Candidates',
    },
    {
      icon: project,
      label:'Project',
      social:share,
      stat:'68',
      value:'Applied w/ Peerlist',
    },
    {
      icon: inbox,
      social:sharee,
      label:'Inbox',
      stat:'2872',
      value:'Views',
    },
    {
      icon: job,
      social:threedot,
      label:'Job',
    },
    {
      icon: search,
      label:'Search',
    },
    {
      icon: network,
      label:'Network',
    },
  ]
  return (
   <>
   <main className="md:px-40 flex  justify-start border-r border-[#E1E4E8]  items-start bg-white h-full min-h-screen">
    <aside className="flex  flex-col py-4 sticky top-2 justify-between w-[212px] border-r  pr-6 h-auto min-h-screen">
      <div className="">
    <Image src={logo} alt="logo" height={32} />
    <div className="flex flex-col gap-2 my-6">
      {asideMenu.map((item,index)=>{
        return(
          <div key={index} className="flex items-center gap-1 h-10">
            <Image src={item.icon} alt="Icon here"/>
            <h4 className="font-semibold text-sm text-[#0D0D0D] leading-5">{item.label}</h4>
          </div>
        )
      })}
    </div>
    <div className="flex flex-col gap-4">
    <div  className="flex items-center gap-1">
            <Image src={user} alt="Icon here"/>
            <h4 className="font-semibold text-sm text-[#0D0D0D] leading-5">Yogini</h4>
          </div>
          <div  className="flex  items-start gap-1">
            <Image src={loom} alt="Icon here"/>
            <h4 className="font-semibold text-sm text-[#0D0D0D] leading-5">Loom
            <p className="text-[10px] ">Manage jobs, teams, & more →</p>
            </h4>
          </div>
    </div>
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-[10px] font-semibold  text-[#444D56] w-[188px]">Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C</p>
      <p className="text-[#444D56] text-[10px]">© 2023 Peerlist Inc.</p>
    </div>
    </aside>
    <div className=" flex flex-col gap-6  w-full ">
      <div className="flex p-6 flex-col gap-6 bg-[#FAFBFC] w-full border-b border-r border-[#E1E4E8]">
      <div className="flex justify-between w-full items-start">
        <div className="flex gap-4 items-center">
          <Image src={circlelogo} alt="circlelogo" className="border p-1 border-[#E1E4E8] rounded-2xl" />
          <div className="flex flex-col">
            <p className="text-lg flex items-center gap-1 font-semibold text-[#0D0D0D] ">Software Engineer, Front End 
            <span>
              <Image src={arrow} alt="arrow"/>
            </span>
            </p>
            <p className=" text-sm text-[#0D0D0D]">at Dyte • Full time • Remote (United States, Canada)</p>
          </div>
        </div>
        <div className="gap-2 flex">
        {asideMenu.map((item,index)=>{
          return(
            <>
            {item.social? (
              <div className="rounded-full  p-1 border">
                <Image src={item.social} alt="" />
              </div>
            ):null}
            </>
          )
        })}
        </div>
        
      </div>
      <div className="flex justify-between w-full pl-16">
        <div className="flex gap-4 ">
        {asideMenu.map((item,index)=>{
          return(
            <>
            {item.stat? (
              <div className="flex gap-1 justify-center">
                <p className="text-xs font-semibold text-[#0D0D0D]">{item.stat}</p>
                <p className="text-xs font-normal text-[#0D0D0D]">{item.value}</p>
              </div>
            ):null}
            </>
          )
        })}
        </div>
        <p className="text-[10px] text-[#0D0D0D] flex justify-center gap-1 items-center">Posted <b>1d ago</b> by <Image src={akash} alt=""/> <b>Akash Bhadange</b></p>
      </div>
      </div>
      <CardContainer />

    </div>

   </main>

   </>
  );
}
