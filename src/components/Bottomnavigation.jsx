import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import googleicon from '../imgfile/google.png'
import appleicon from '../imgfile/apple.png'
function Bottomnavigation() {
  return (
    <div className='botnavMain'>
      <div className='botnavContent1'>
        <div className='aboutContent'>
        <FaPlay className='aboutContentIcon1' /> <span>About MediaSite</span>
        </div>
        <div className='sampleText1'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsa, omnis. Ex ullam optio doloremque maxime.
             Quasi sed vel harum repellendus veritatis soluta neque molestias amet placeat,
              similique ab consequatur rerum.</span>
        </div>

        <div className='sampleText2'>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Eius, sit similique asperiores officiis voluptatum obcaecati 
             numquam maiores vel voluptatem eligendi nemo porro,
             incidunt impedit non sed quos dolorum rem labore.</span>
        </div>
        <div className='aboutBTN'>
          <button><span>Find out more</span><MdOutlineKeyboardDoubleArrowRight className='aboutBTNicon'/>  </button>
        </div>
      </div>

      <div className='botnavContent2'>
        <div className='categoryContent1'>
          <div className='categoryDesc'>
          <FaListUl className='categoryContentIcon1' /> <span> Categories</span>
          </div>
        <div className='categoryAllItems'>
        <div className='categoryContentItem1'>
        <MdOutlineSmartDisplay className='categoryICONS1'/>
        <span>Gaming</span>
        </div>
        <div className='categoryContentItem2'>
        <MdOutlineSmartDisplay className='categoryICONS1' />
        <span>Movies</span>
        </div>
        <div className='categoryContentItem3'>
        <MdOutlineSmartDisplay className='categoryICONS1' />
        <span>Sports</span>
        </div>
        <div className='categoryContentItem4'>
        <MdOutlineSmartDisplay className='categoryICONS1' />
        <span>Entertainment</span>
        </div>
        <div className='categoryContentItem5'>
        <MdOutlineSmartDisplay className='categoryICONS1' />
        <span>Music</span>
        </div>
        </div>
        </div>
      </div>

      <div className='informationContent'>
      <div className='informationContent1'>
          <div className='informationDesc'>
          <FaInfo className='informationContentIcon1' /> <span> Information</span>
          </div>
        <div className='informationAllItems'>
        <div className='informationContentItem1'>
        <MdOutlineSmartDisplay className='informationICONS1'/>
        <span>Gaming</span>
        </div>
        <div className='informationContentItem2'>
        <MdOutlineSmartDisplay className='informationICONS1' />
        <span>Movies</span>
        </div>
        <div className='informationContentItem3'>
        <MdOutlineSmartDisplay className='informationICONS1' />
        <span>Sports</span>
        </div>
        <div className='informationContentItem4'>
        <MdOutlineSmartDisplay className='informationICONS1' />
        <span>Entertainment</span>
        </div>
        <div className='informationContentItem5'>
        <MdOutlineSmartDisplay className='informationICONS1' />
        <span>Music</span>
        </div>
        </div>
        </div>
      </div>

      <div className='mobileappsContent'>

        <div className='mobileappsDesc'>
        <FaMobileScreen className='mobileappsDescICON' /> <span>Mobile apps</span>
        </div>
        <div className='mobileappsText'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur eum temporibus. Et, minima explicabo beatae fuga accusantium</span>
        </div>
        <div></div>
        <div className='mobileappsBTN'>
          <button className='mobileappsApple'><img src={appleicon} alt="" style={{width:'25px',height:'30px'}} /> <div className='mobileappsAppleTEXT'><span>Download on the</span> <h2>App Store</h2></div> </button>
          <button className='mobileappsGoogle'><img src={googleicon} alt="" style={{width:'25px',height:'30px'}} /> <div className='mobileappsGoogleTEXT'><span>Download on the</span> <h2>Play Store</h2></div></button>
        </div>
      </div>
    </div>
  )
}

export default Bottomnavigation