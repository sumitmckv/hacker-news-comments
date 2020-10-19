export const theme  = {
  TTextarea: {
    fixedClasses: 'form-textarea',
    classes: '',
    variants: {
      danger: 'border-red-300 bg-red-100',
      success: 'border-green-300 bg-green-100'
    }
  },
  TModal: {
    fixedClasses: {
      overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
      wrapper: 'z-50 relative mx-auto my-0 max-w-lg mt-12',
      modal: 'bg-white shadow overflow-hidden relative',
      body: 'p-4',
      header: 'p-4 border-b text-sm font-semibold uppercase text-gray-700',
      footer: 'p-2 border-t',
      close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
      closeIcon: 'h-5 w-5 fill-current'
    },
    classes: {
      overlay: 'bg-black ',
      wrapper: '',
      modal: '',
      body: 'p-4',
      header: 'text-gray-700',
      footer: '',
      close: 'text-gray-700 hover:text-gray-600',
      closeIcon: ''
    },
    variants: {
      danger: {
        overlay: 'bg-red-500',
        header: 'border-red-100 text-red-700',
        footer: 'border-red-100 bg-red-100',
        close: 'text-red-700 hover:text-red-600'
      }
    }
  }
};