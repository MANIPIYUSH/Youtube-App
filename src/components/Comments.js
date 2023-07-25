import React from 'react'







const  Comments = ({data})=>{

    const {name,text}= data;
  return (
   
           <div className='flex shadow-sm  bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-12 h-12' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAaVBMVEX///8AAADz8/Pq6ur6+vrh4eH39/fk5OTw8PDb29tubm5bW1tOTk7Y2Njn5+cgICCFhYVTU1NISEh0dHQtLS1lZWXBwcGOjo6enp7Ozs4nJyd+fn4bGxs/Pz8PDw+2trY0NDSpqamWlpZJpol+AAAEQ0lEQVR4nO1b2bKiMBC9AgaI7Moqi/j/HzkmDS53BOnQcWqqOI+ahEN679afnw0bNmzYsGHDBq1ghuMY7F893XL7iMdJ0yQxj3rX+vrzO97uXsG7b7Jwz7u3OPpfIhAcf1/A01XY32BQvDwzvFzClw8K7QSCy+ON+9KBD52yP94/Pmm+iG58UJr9MkWWpeN3nU4GoxDSt3rnc/3CGBi05dSCsoYVuWYG57k1Eay56mHQLZJ0Bqt6HQx8ODv7tK6EdTq81GkZg5FDSO+uo+X2ln1WGRXsMVp21SIK6XeSpasTsfpAywDk6y5dvl+qNwgckNLNxXqPkoErTqz3yzfYIbU2SL94xOyIqH1kjdIEAdAGOgamlCzK11hSexCi+4BOIfoVtJFCZquTEfo9fFIPCZeK3SX2xFRVjiHyxRq7S4S10CGiYCr5GenSTUoKKK8gEJFTiLC7ckqrtJUy0hztzmZgKtkX6S1ICil215lSFxxRxjbYXQklBdaouCbB+2IQUfjhCi9kSOmRpdFXhZCjEtpmUCr4pog2e7TEcS3K3zuV2EOmCoO/R7UNMur8VR6YYHTLQ5P+AHZCSlZyJgvVEtLbXpavT5Qi2yzMCpWUy8SxJu57FZhKFVUDLwaTzb5mkXQdqYsVoUUCoGmwKF5yDUWtBPQ4FlTs0H8k73AIHOAePtwvgzuItbTlgwYOn82EAiB6oSvlXiBzyPmY2Q1Nek0Mbq8IXbddMmGcfgzfh9oY3DgMz2hT/y9ZW/44qPE0Mrgp273pfyjsZxZ2cRi/4eQO4Rfu44DbffO877qs63NePT7VOgoAGNFuBmfS6DiJfTJFoKGqnuZhFOnkeKxNC/234B+nHn/XRmQ7Bokyfnla6MWHG2LvdUiX6CNh88djqviauTZjN8O0GAvcrIhPj29TTZ7haUCZl29EbpT5Y4WOyZB9f0k+kwmUd1WpyY1j9Ejt+UNGGESjvRCPp8Y5ebrg3dxRZdDtqTkMhlAtVPVyjKhkeYsJuQomFxuc+CWgYRB4oAWofDSDuW1CUkswiAgt8rAAgmdDEblBDzz0UQwSiMUjtWmALaQK/ewhl+ZrGfRwB0rxz4B7WPlTAqgOa8WevgXGuW5KBmcoq7UpPSV6jvAMmPyuqA6hEl3ReIPaZVWnAl5CPWRJla7WeVnZFEA3sEfAoHplCuSvkmVMYtbnFQ5KXkK7OvPY1+rXwFfrIkCmc7HKTkcKkWCgYCr7Fvy0fgpSGxTyWSsmMAeANIoGb9syOlQUDAbfgNfrYqVnJTgrJZPDYN7oH/g4zdoQ9wxRc56wqayvRHwKXOVKM4J85wGZe2Grq3xlovCKElmGSBxI4sOIvVAG7Lz3pKJAk5DKjXUyohBJyH5vz0RBhvwFpCEiLGE3XcoVeakNTaAekSsIYh/XnPB/D+wYeuhygpHpIsD8Z3/k2LBhw4YNGzb8//gDhw8q3iOHF+wAAAAASUVORK5CYII=" alt="media"/>
            <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>

            </div>

              
           
           </div>

  )
}

export default Comments