import React, { useEffect, useState } from 'react'
import ExperienceCard1 from './ExperienceCard1'
import ExperienceCard2 from './ExperienceCard2'

export default function ExperienceList({items, select, loading}) {

    const [itemsToInput, setItemsToInput] = useState([]);

    return (
      <div className='grid grid-cols-1 gap-4'>
          {loading && (<div className="block m-auto pt-[13rem]"><img src="./image/util/loading.gif" /></div>) }
          {(!loading && select === "1") && items.map((item, index) => (<ExperienceCard1 key={index} item={item} />))}   
          {(!loading && select === "2") && items.map((item, index) => (<ExperienceCard2 key={index} item={item} />))}   
      </div>
    )
}
