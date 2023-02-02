import React, {useState,useEffect} from 'react'

const DataRequest = ({ipType}) => {
  const [ipAddress, setIpAddress] = useState('');
  useEffect(() => {
    const fetchIpData = async () => {
      const res = await fetch(`https://api.ipify.org?format=${ipType}`);
      const data = await res.text();
      setIpAddress(data);
    };
    fetchIpData();
  }, [type]);

  return (
    <h1>{ipAddress}</h1>
  )
}

export default DataRequest