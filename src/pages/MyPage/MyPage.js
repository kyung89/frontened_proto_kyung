import React from 'react'
import MyPageMenu from './components/MyPageMenu'
import MyPageContent from './components/MyPageContent'

export default function MyPage() {
  return (
    <div className="w-full flex flex-row h-full p-5">
      <section className="w-60 border border-black mr-5">
        <MyPageMenu />
      </section>
      <section className="w-full border border-black">
        <MyPageContent />
      </section>
    </div>
  )
}
