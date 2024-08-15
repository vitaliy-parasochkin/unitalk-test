import {Avatar} from '@mui/material';

type Props = {
  src: string;
  alt: string;
};

function TableAvatar({src, alt}: Props) {
  return (
    <Avatar
      src={src || ''}
      alt={alt}
      sx={theme => ({
        background: theme.palette.primary.main,
      })}
    />
  );
}

export default TableAvatar;
