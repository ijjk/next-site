import Link from 'next/link';
import classNames from 'classnames';
import css from 'styled-jsx/css';

import withPure from './hoc/pure';

const cachedStyles = css`
  .btn {
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    border-radius: 7px;
    color: #0070f3;
    background-color: transparent;
    border: none;
    font-size: inherit;
    line-height: inherit;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  }
  .btn:hover {
    color: #0070f3;
    background: rgba(0, 118, 255, 0.1);
  }
  .btn.invert {
    margin: 0;
    padding: 0 2rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 7px;
    background-color: #0070f3;
    box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
    color: white;
  }
  .btn.invert:hover {
    background: rgba(0, 118, 255, 0.9);
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
  .btn.invert:active {
    background: #006ae6;
  }
`;
export default withPure(function Button({
  children,
  invert,
  href,
  as,
  className,
  prefetch,
  amp,
  ...props
}) {
  const cachedClassNames = classNames(className, 'btn', 'fw4 no-drag', {
    invert
  });
  const a = (
    <a className={cachedClassNames} href={href} {...props}>
      {children}
      <style jsx>{cachedStyles}</style>
    </a>
  );

  const btn = (
    <button className={cachedClassNames} {...props}>
      {children}
      <style jsx>{cachedStyles}</style>
    </button>
  );

  if (href) {
    return amp ? (
      a
    ) : (
      <Link href={href} as={as} prefetch={prefetch}>
        {a}
      </Link>
    );
  }
  return btn;
});
