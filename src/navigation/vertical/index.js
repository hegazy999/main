const navigation = () => {
  return [

    {
      title: 'lawyer',
      icon: 'tabler:user',
      children: [
        {
          title: 'All lawyer',
          path: '/Lawyer'
        },

      ]
    },
    {
      title: 'Customer',
      icon: 'tabler:user',
      children: [
        {
          title: 'All Customer',
          path: '/Customer'
        },

      ]
    },
    {
      title: 'Appointment',
      icon: 'tabler:user',
      children: [
        {
          title: 'All Appointment',
          path: '/appointments'
        },

      ]
    },
    {
      title: 'Setting',
      icon: 'tabler:user',
      children: [
        {
          title: 'City',
          path: '/city'
        },
        {
          title:'Area',
          path : '/area'
        }

      ]
    },

  ]
}

export default navigation
