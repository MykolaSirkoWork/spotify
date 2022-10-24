import React, { useEffect, useState } from 'react';
import Modal from '../Modal1/modal1';
import Discover from './Discover';

export default function Routes() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if(!token) {
      setIsOpen(true)
    }
  }, [])

  const onClose = () => {
    setIsOpen(false);
  }
  // Here you'd return an array of routes
  return (
    <>
      <Discover />
      {isOpen && <Modal isOpen={isOpen} onClose={onClose}/>}
    </>
  );
}
