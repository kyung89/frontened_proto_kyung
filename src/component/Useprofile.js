import React from 'react';

const Useprofile = ({ userdata }) => {
    if (!userdata || !userdata.profileImage) {
        return null;
    }

    const { profileImage } = userdata;
    const base64String = `data:image/jpeg;base64,${profileImage}`;

    return (
        <img
            src={base64String}
            alt="프로필 이미지"
            className="rounded-full object-cover w-full h-full" // 부모 div 크기에 맞게 조절
        />
    );
};

export default Useprofile;
