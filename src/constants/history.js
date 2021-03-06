export const dataHead = [
  {
    headerName: 'Date',
    fieldname: 'date',
    noCap: true,
  },
  {
    headerName: 'Patient',
    fieldname: 'patient',
    fieldChild: 'name',
  },
  {
    headerName: 'Department',
    fieldname: 'department',
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


