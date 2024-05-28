import { Box, Breadcrumbs, Label, Link, Text } from '@primer/react'
import { Stack } from '@primer/react/lib-esm/Stack'
import { ForkData } from 'hooks/useFork'
import { OrgData } from 'hooks/useOrganization'

interface ForkBreadcrumbsProps {
  orgData: OrgData
  forkData: ForkData
}

export const ForkBreadcrumbs = ({
  orgData,
  forkData,
}: ForkBreadcrumbsProps) => {
  if (!forkData) {
    return null
  }

  return (
    <Box sx={{ marginBottom: '10px' }}>
      <Stack direction="vertical" justify="start" gap="none">
        <Stack.Item grow={false}>
          <Stack.Item>
            <Breadcrumbs sx={{ display: 'inline-block', paddingRight: '10px' }}>
              <Breadcrumbs.Item
                href={`/${orgData?.login}`}
                sx={{ fontSize: '2', fontWeight: 'bold' }}
              >
                All Forks
              </Breadcrumbs.Item>
              <Breadcrumbs.Item
                selected
                sx={{ fontSize: '2', fontWeight: 'bold' }}
              >
                {forkData?.name}
              </Breadcrumbs.Item>
            </Breadcrumbs>
            <Label variant="secondary">
              {forkData?.private ? 'Private' : 'Public'}
            </Label>
          </Stack.Item>
          <Stack.Item>
            <Text
              sx={{
                color: 'fg.muted',
                fontSize: '0.75rem',
                fontWeight: '600',
              }}
            >
              Forked from{' '}
              <Link
                href={`https://github.com/${forkData?.parent?.owner.login}/${forkData?.parent?.name}`}
                target="_blank"
                rel="noreferrer noopener"
                sx={{ color: 'fg.muted' }}
              >
                {forkData?.parent?.owner.login}/{forkData?.parent?.name}
              </Link>
            </Text>
          </Stack.Item>
        </Stack.Item>
      </Stack>
    </Box>
  )
}