import React from 'react';

import * as S from './styled';
import certificateIcon from '../../../../../assets/certificate.png';
import checkmarkIcon from '../../../../../assets/checkmark-blue.png';
import clipboardIcon from '../../../../../assets/clipboard.png';
import capIcon from '../../../../../assets/cap.png';

const statuses = [{
    key: 'graduate',
    title: 'Graduate',
    icon: certificateIcon,
  },
  {
    key: 'student',
    title: 'Student',
    icon: capIcon,
  },
  {
    key: 'applicant',
    title: 'Applicant',
    icon: clipboardIcon,
}];

const Status = ({ setStatus, value }) => {
  return (
    <S.Status>
      <S.Title>Status</S.Title>
      <S.StatusItems>
        {statuses.map(({ key, title, icon }, index) => (
          <S.Item
            key={index}
            selected={key === value}
            onClick={() => setStatus(key)}
          >
            <img src={icon} alt={title} />
            <span>{title}</span>
            <img src={checkmarkIcon} alt="selected" selected={key === value} />
          </S.Item>
        ))}
      </S.StatusItems>
    </S.Status>
  );
};

export default Status;
