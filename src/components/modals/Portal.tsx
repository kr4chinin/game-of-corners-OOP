import { FC, useEffect, useState } from 'react'

interface PortalProps {
	children: React.ReactNode
}

const Portal: FC<PortalProps> = ({ children }) => {
	const [container] = useState(() => document.createElement('div'))

	useEffect(() => {
		document.body.appendChild(container)

		return () => {
			document.body.removeChild(container)
		}
	})

	return <div>{children}</div>
}

export default Portal
