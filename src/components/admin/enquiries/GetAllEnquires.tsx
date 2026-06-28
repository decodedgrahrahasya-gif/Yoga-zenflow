"use client"
import { useAppDispatch } from '@/redux/hooks';
import { fetchEnquiries } from '@/redux/slices/enquiries/enquiriesThunk';
import { RootState } from '@/redux/store';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const GetAllEnquires = () => {
      const dispatch = useAppDispatch();

    const isApi = useRef<boolean>(false);

        const { isfetchedEnquiry } = useSelector((state: RootState) => state.enquiries);

    useEffect(() => {
        if (!isfetchedEnquiry &&
            !isApi.current) {
            isApi.current = true;
            dispatch(fetchEnquiries());
        }
    }, [isfetchedEnquiry]);

  return null
}

export default GetAllEnquires