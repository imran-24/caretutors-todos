'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  total: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    total
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  // const isMobile = useMediaQuery("(max-width: 768px)");

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '9'

  return (
    <div className='text-sm flex-1 flex items-center justify-center  gap-2'>
      <button
        type='button'
        className='flex items-center font-medium text-white border-2 bg-sky-500 rounded-md pr-1 hover:bg-sky-600'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
          <ChevronsLeft className=' mr-1' />
          <span className='mb-[1px]'>prev</span>
        
      </button>

      <div className=' font-medium text-base '>
        {page} / {Math.ceil( total/Number(per_page))}
      </div>

      <button
        type='button'
        className='flex items-center font-medium text-white border-2 bg-sky-500 rounded-md pl-1 hover:bg-sky-600'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        <span className='mb-[1px]'>next</span>
        <ChevronsRight className='ml-1' />
      </button>
    </div>
  )
}

export default PaginationControls