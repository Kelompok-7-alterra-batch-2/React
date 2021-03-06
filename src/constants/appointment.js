import moment from 'moment'

export const dataHead = [
  {
    headerName: 'Queue',
    fieldname: 'queue',
  },
  {
    headerName: 'Time',
    fieldname: 'arrivalTime',
    noCap: true,
  },
  {
    headerName: 'Patient',
    fieldname: 'patient',
    fieldChild: 'name',
  },
  {
    headerName: 'Doctor',
    fieldname: 'doctor',
    fieldChild: 'name',
  },
  {
    headerName: 'Status',
    fieldname: 'outpatientCondition',
    fieldChild: 'conditions',
  },
  {
    headerName: 'Edit',
    fieldname: 'edit',
    delete: true,
  },
]

export const dataHeadFilter = [
  {
    headerName: 'Time',
    fieldname: 'arrivalTime',
    noCap: true,
  },
  {
    headerName: 'Patient',
    fieldname: 'patient',
    fieldChild: 'name',
  },
  {
    headerName: 'Doctor',
    fieldname: 'doctor',
    fieldChild: 'name',
  },
  {
    headerName: 'Status',
    fieldname: 'outpatientCondition',
    fieldChild: 'conditions',
  },
  {
    headerName: 'Edit',
    fieldname: 'edit',
    delete: true,
  },
]

export const field = [
  {
    title: 'Patient',
    fieldname: 'patient_id',
    type: 'search',
    endPoint: 'patients',
    value: 'patient',
    valueChild: 'id',
    param: {
      first: {
        title: 'name',
        value: 'id',
      },
      second: 'address',
    },
  },
  {
    title: 'Appointment Date',
    fieldname: 'date',
    type: 'date',
  },
  {
    title: 'Appointment Time',
    fieldname: 'arrivalTime',
    type: 'arrival-time',
  },
  {
    title: 'Department',
    fieldname: 'department_id',
    type: 'department',
    value: 'department',
    valueChild: 'id',
  },
  {
    title: 'Doctor',
    fieldname: 'doctor_id',
    type: 'doctor',
    value: 'doctor',
    valueChild: 'id',
    disabled: false,
  },
  {
    title: 'Appointment Reason',
    fieldname: 'appointmentReason',
    type: 'area',
    rows: 3,
  },
]

export const initialData = {
  patient_id: '',
  department_id: '',
  date: moment().format('YYYY[-]MM[-]DD'),
  arrivalTime: 'TimeNow()',
  doctor_id: '',
  appointmentReason: '',
}

export const filterStatus = [
  {
    name: 'Done',
    value: '/done',
  },
  {
    name: 'Process',
    value: '/process',
  },
  {
    name: 'Pending',
    value: '/pending',
  },
]
