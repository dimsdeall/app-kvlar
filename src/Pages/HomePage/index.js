import React from 'react'
import { BottomBar, ChartDonut, DataTableOrder } from '../../Components'

function HomePage() {
  return (
    <div className='d-flex flex-column'>
      <div className='bg-info px-3 pt-2 pb-3 mb-3 shadow-sm'
        style={{
          borderEndStartRadius:55,
          borderEndEndRadius:55,
        }}
      >
        <ChartDonut />
      </div>
        <DataTableOrder />
      <BottomBar />
    </div>
  )
}

export default HomePage