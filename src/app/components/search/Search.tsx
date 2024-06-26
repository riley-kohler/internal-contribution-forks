import { SearchIcon, XCircleFillIcon } from '@primer/octicons-react'
import { Box, FormControl, TextInput } from '@primer/react'
import { ChangeEvent } from 'react'

interface SearchProps {
  placeholder: string
  searchValue: string
  setSearchValue: (value: string) => void
}

export const Search = ({
  placeholder,
  searchValue,
  setSearchValue,
}: SearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <Box
      sx={{
        padding: '1px',
        marginBottom: '10px',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <FormControl>
        <FormControl.Label visuallyHidden>Search</FormControl.Label>
        <TextInput
          onChange={handleChange}
          value={searchValue}
          leadingVisual={SearchIcon}
          placeholder={placeholder}
          size="large"
          block
          trailingAction={
            <TextInput.Action
              onClick={() => {
                setSearchValue('')
              }}
              icon={XCircleFillIcon}
              aria-label="Clear input"
              sx={{
                color: 'fg.subtle',
              }}
            />
          }
        />
      </FormControl>
    </Box>
  )
}
