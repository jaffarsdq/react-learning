import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useUserProfile() {
    let { userId } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    useEffect(() => {
      axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
        headers: {
          'app-id': import.meta.env.VITE_APP_ID
        }
      })
      .then((response) => {
        setUser({...response.data})
        setLoading(false);
      })
    }, []);

    return [loading,user];
}