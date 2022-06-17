import React,{useState,useEffect} from 'react'

import { Navigation , Autoplay} from 'swiper'
 
import { Box, Card, CardContent, CardMedia, Typography,} from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'

import axios from 'axios'

import { toCapitalize } from 'helpers/function/toCapitalize'

export default function DoctorBox() {
    
    const [data,setData] = useState(null)

    const [isLoading,setIsLoading] = useState(true)


    useEffect(()=>{

        axios({
            method : 'get',
            url : 'https://62a18758cc8c0118ef4d691f.mockapi.io/doctor',
            data : {},
            headers : {
              'Content-Type' : 'application/json'
            }
          }).then((res)=>{
            setData(res.data)
            setIsLoading(false)
          }).catch(()=>{
    
          })

    },[])

  return (
    
    <Box>
        
        <Typography
        variant='h3'
        sx={{
            mb : '30px'
        }}
        >
            Today's Doctor
        </Typography>

        <Box>
            
            {(!isLoading && data) &&
            
            <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay
            style={{
                padding : '10px 10px'
            }}
            >

                {data.map((item,index)=>(

                    <SwiperSlide
                    key={index}
                    >
                        <Card
                        sx={{
                            bgcolor : 'neutral100'
                        }}
                        >

                            <CardContent
                            sx={{
                                display : 'flex',
                                flexDirection : 'column',
                                alignItems : 'center',
                            }}
                            >

                                <CardMedia
                                component='img'
                                height='250px'
                                image='https://imgs.search.brave.com/F8PsUWmSwHQBYnhSQedec-qE1biVfOnOUpXz62mAuic/rs:fit:918:832:1/g:ce/aHR0cHM6Ly9yZXF1/aXJlbWVudHNpbmMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzEwL2RvY3Rv/ci5wbmc'
                                alt={(item.name + 'image')}
                                sx={{
                                    width : '250px',
                                    borderRadius : '4px',
                                    marginBottom : '30px'
                                }}
                                />
                                
                                <Typography
                                variant='body3'
                                sx={{
                                    marginBottom : '10px'
                                }}
                                >{item.name}</Typography>

                                <Typography
                                variant='body6'
                                >{toCapitalize(item.department)}</Typography>
                            
                            </CardContent>

                        </Card>
                    
                    </SwiperSlide>

                ))}

            </Swiper>
            
            }

        </Box>

    </Box>
    
  )
}