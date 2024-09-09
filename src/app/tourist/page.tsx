// src/components/TouristInfoList.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { apiService } from '../../utils/api'; // 确保路径正确
import axios from 'axios';
import { Button, Flex } from 'antd';
const TouristInfoList = () => {
  const [touristInfoList, setTouristInfoList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTouristInfo = async () => {
      try {
        const data = await apiService.sceneryInfo.fetchAll();
        console.log('data', data)
        setTouristInfoList(data);
      } catch (err) {
        setError('Failed to fetch tourist info');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTouristInfo();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Tourist Info List</h1>
      <ul>
        {touristInfoList.map((info) => (
          <div>
            <li key={info.id}>-{info.name}</li>
            <li key={info.id}>-{info.address}</li>
            <li key={info.id}>-{info.description}</li>
            <li key={info.id}>-{info.type}</li>
            <img src={info.picUrl} alt="" />
          </div>
        ))}
      </ul>
      <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
    </div>
  );
};

export default TouristInfoList;
