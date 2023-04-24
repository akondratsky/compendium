import { useSearchParams } from 'react-router-dom';

export const useEditMode = () => {
  const [params, setParams] = useSearchParams();

  const isEditMode = params.get('edit') === 'true';

  const setIsEditMode = (isEditMode: boolean) => {
    params.set('edit', String(isEditMode));
    setParams(params);
  };

  return [isEditMode, setIsEditMode] as const;
};