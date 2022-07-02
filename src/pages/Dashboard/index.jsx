import React from 'react'

import { Box } from '@mui/material'

import { DefaultLayout } from 'components'

import WelcomeBox from './components/WelcomeBox'
import OverviewBox from './components/OverviewBox'
import DoctorBox from './components/DoctorBox'
import { useQuery } from 'react-query'
import { fetchAppointment, fetchData, fetchUser } from 'api/get'

const userId = '1'
export default function Dashboard() {
  const usersQuery = useQuery([userId, userId], () => fetchUser(userId))
  const doctorQuery = useQuery(['doctors', 'doctors'], () =>
    fetchData('doctors')
  )
  const appointmentQuery = useQuery('outpatients', fetchAppointment)
  const patientQuery = useQuery(['patients', 'patients'], () =>
    fetchData('patients')
  )

  return (
    <DefaultLayout
      data={usersQuery.data?.data}
      isLoading={usersQuery.isLoading}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          pb: '50px',
        }}
      >
        <WelcomeBox
          isLoading={usersQuery.isLoading}
          user={usersQuery.data?.data}
        />
        <OverviewBox
          doctor={doctorQuery.data?.data}
          appointment={appointmentQuery.data}
          patient={patientQuery.data?.data}
          isLoading={doctorQuery.isLoading && appointmentQuery.isLoading}
        />

        <DoctorBox
          doctor={doctorQuery.data?.data}
          isLoading={doctorQuery.isLoading}
        />
      </Box>
    </DefaultLayout>
  )
}
