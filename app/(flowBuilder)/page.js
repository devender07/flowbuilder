'use client'
import Node from '@/components/Node/Node'
import { useSelector } from 'react-redux'

const page = () => {

  const flowData = useSelector(state => state.flow)

  return (
    <>
      <Node node={flowData['start']} nodeKey='start' nodes={flowData} />
    </>
  )
}

export default page;