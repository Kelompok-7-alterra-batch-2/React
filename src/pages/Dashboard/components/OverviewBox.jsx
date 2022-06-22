import React from 'react'

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import NoteAltIcon from '@mui/icons-material/NoteAlt'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'

export default function OverviewBox(props) {
  const { doctor, appointment, isLoading } = props

  const navigate = useNavigate()

  return (
    <Box>
      <Typography
        variant='h3'
        sx={{
          marginBottom: '30px',
        }}
      >
        Today's Overview
      </Typography>

      <Box
        sx={{
          display: 'flex',
          columnGap: '25px',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            width: '100%',
            borderRadius: '8px',
            bgcolor: 'neutral100',
          }}
        >
          <CardActionArea
            onClick={() => {
              navigate('/appointment')
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '16px',
                justifyContent: 'center',
                padding: '32px 0',
              }}
            >
              <NoteAltIcon
                sx={{
                  height: '56px',
                  width: '56px',
                  color: 'primary.main',
                }}
              />

              <Typography variant='h3'>
                {appointment && !isLoading ? appointment.length : 0}
              </Typography>

              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                Appoinments
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: '100%',
            borderRadius: '8px',
            bgcolor: 'neutral100',
          }}
        >
          <CardActionArea
            onClick={() => {
              navigate('/doctor')
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                columnGap: '16px',
                justifyContent: 'center',
                padding: '32px 0',
              }}
            >
              <PermIdentityIcon
                sx={{
                  height: '56px',
                  width: '56px',
                  color: 'primary.main',
                }}
              />

              <Typography variant='h3'>
                {doctor && !isLoading ? doctor.length : 0}
              </Typography>

              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                Doctors
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: '100%',
            borderRadius: '8px',
            bgcolor: 'neutral100',
          }}
        >
          <CardActionArea>
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                justifyContent: 'center',
                padding: '32px 0',
              }}
            >
              <MedicalServicesIcon
                sx={{
                  height: '56px',
                  width: '56px',
                  color: 'primary.main',
                }}
              />

              <Typography variant='h3'>15</Typography>

              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: '700',
                }}
              >
                Emergency
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  )
}
