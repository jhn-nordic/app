import React, { useState } from 'react'

import './Collapsable.scss'

export const Collapsable = ({
	id,
	title,
	initial,
	children,
	onToggle,
	className,
}: {
	id: string
	title: React.ReactElement<any>
	initial?: boolean
	className?: string
	children: React.ReactElement<any> | (React.ReactElement<any> | null)[]
	onToggle?: (collapsed: boolean) => void
}) => {
	let initialState = !!initial
	if (window.localStorage.getItem(`bifravst:toggle:${id}`) === '1') {
		initialState = true
	}
	const [collapsed, setCollapsed] = useState(initialState)

	const toggle = () => {
		const state = !collapsed
		setCollapsed(state)
		onToggle && onToggle(state)
		window.localStorage.setItem(`bifravst:toggle:${id}`, state ? '1' : '0')
	}

	return (
		<>
			{collapsed && (
				<div className={`collapsable ${className} collapsed`}>
					<div className={'header'} onClick={toggle}>
						<div className={'title'}>{title}</div>
						<button className={'toggle'} title={'Expand'} onClick={toggle}>
							⌃
						</button>
					</div>
				</div>
			)}
			{!collapsed && (
				<div className={`collapsable ${className} expanded`}>
					<div className={'header'} onClick={toggle}>
						<div className={'title'}>{title}</div>
						<button
							className={'toggle'}
							color={'link'}
							title={'Collapse'}
							onClick={toggle}
						>
							⌃
						</button>
					</div>
					<div className={'content'}>{children}</div>
				</div>
			)}
		</>
	)
}
