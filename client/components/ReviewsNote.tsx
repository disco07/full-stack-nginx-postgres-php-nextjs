import React from 'react';
import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from 'react-icons/io';
import uniqid from 'uniqid';

interface Props {
  notes: number;
}

const ReviewsNotes = ({ notes }: Props): JSX.Element => {
  const note: number = Math.trunc(notes);
  const float: number = notes - Math.trunc(notes);
  const indents: JSX.Element[] = [];
  for (let i = 0; i < note; i++) {
    indents.push(<IoIosStar color="grey" size="0.9em" key={uniqid()} />);
  }

  if (float >= 0.1) {
    indents.push(<IoIosStarHalf color="grey" size="0.9em" key={uniqid()} />);
    for (let i = 0; i < 5 - note - 1; i++) {
      indents.push(
        <IoIosStarOutline color="grey" size="0.9em" key={uniqid()} />,
      );
    }
  } else {
    for (let i = 0; i < 5 - note; i++) {
      indents.push(
        <IoIosStarOutline color="grey" size="0.9em" key={uniqid()} />,
      );
    }
  }
  return <>{indents.map((item) => item)}</>;
};

export default ReviewsNotes;
