import React from 'react'

// 아이디 눌러서 쪽지 기능 구현해야함
export default function Comment() {
  return (
    <div className="mb-2 w-full h-full p-6 bg-white border border-gray-200 rounded-lg">
        <div className="flex flex-row justify-between">
            <div className="text-xs font-medium text-gray-800">John Doe</div>
            <div className="mr-0 text-xs text-gray-500">2 hours ago</div>
        </div>
        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
        nulla. Donec consequat urna a tortor sagittis lobortis.</p>
    </div>
  )
}
